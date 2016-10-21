use chalk_parse::ast;

pub struct Environment {
    bound_names: Vec<Option<ast::Variable>>,
    next_wildcard: Option<usize>,
}

impl Environment {
    pub fn new() -> Self {
        Environment { bound_names: vec![], next_wildcard: None }
    }

    pub fn push_bound_name(&mut self, v: ast::Variable) {
        println!("push_bound_name(v={:?})", v);
        self.bound_names.push(Some(v));
    }

    pub fn pop_bound_name(&mut self) {
        self.bound_names.pop();
    }

    /// Brings N wildcards into scope. These will occupy the next N
    /// bound DeBruijn indices.
    pub fn push_wildcards(&mut self, count: usize) {
        println!("push_wildcards({})", count);
        assert!(self.next_wildcard.is_none(), "nested wildcard scopes");
        let len = self.bound_names.len();
        println!("push_wildcards: len={}", len);
        self.bound_names.extend((0..count).map(|_| None));
        self.next_wildcard = Some(len);
    }

    pub fn pop_wildcards(&mut self, count: usize) {
        println!("pop_wildcards({})", count);
        let len = self.bound_names.len();
        assert_eq!(self.next_wildcard, Some(len), "some wildcards unused");
        for _ in 0 .. count {
            assert_eq!(self.bound_names.pop(), Some(None));
        }
        self.next_wildcard = None;
    }

    pub fn lookup(&self, name: ast::Variable) -> Option<usize> {
        self.bound_names
            .iter()
            .rev()
            .position(|&x| x == Some(name))
    }

    pub fn claim_wildcard(&mut self) -> usize {
        println!("claim_wildcard(next_wildcard={:?})", self.next_wildcard);
        match self.next_wildcard {
            Some(ref mut n) => {
                assert!(*n > 0, "too many wildcards used");
                let v = *n;
                *n += 1;
                assert_eq!(self.bound_names[v], None, "wildcard maps to bound name");
                self.bound_names.len() - v - 1
            }
            None => {
                panic!("did not expect wildcards")
            }
        }
    }
}
