initSidebarItems({"enum":[["Constraint","A constraint on lifetimes."],["DomainGoal","A \"domain goal\" is a goal that is directly about Rust, rather than a pure logical statement. As much as possible, the Chalk solver should avoid decomposing this enum, and instead treat its values opaquely."],["FromEnv",""],["Goal","A general goal; this is the full range of questions you can pose to Chalk."],["ItemId",""],["LeafGoal","A goal that does not involve any logical connectives. Equality is treated specially by the logic (as with most first-order logics), since it interacts with unification etc."],["Lifetime",""],["ParameterKind",""],["ProgramClause",""],["ProjectionTyEnum",""],["QuantifierKind",""],["Ty",""],["TypeKindId",""],["TypeName",""],["TypeSort",""],["WellFormed",""],["WhereClause","Where clauses that can be written by a Rust programmer."]],"macro":[["arg",""],["copy_fold",""],["enum_fold",""],["lifetime",""],["struct_fold",""],["ty",""],["ty_name",""]],"mod":[["cast",""],["could_match",""],["debug",""],["fold","Traits for transforming bits of IR."],["macros","Useful macros for writing unit tests. They let you gin up dummy types and things."],["tls",""],["zip",""]],"struct":[["ApplicationTy",""],["Binders","Indicates that the `value` is universally quantified over `N` parameters of the given kinds, where `N == self.binders.len()`. A variable with depth `i < N` refers to the value at `self.binders[i]`. Variables with depth `>= N` are free."],["BindersIntoIterator",""],["Canonical","Wraps a \"canonicalized item\". Items are canonicalized as follows:"],["ClauseId",""],["ConstrainedSubst","Combines a substitution (`subst`) with a set of region constraints (`constraints`). This represents the result of a query; the substitution stores the values for the query's unknown variables, and the constraints represents any region constriants that must additionally be solved."],["Environment","The set of assumptions we've made so far, and the current number of universal (forall) quantifiers we're within."],["EqGoal",""],["ImplId",""],["InEnvironment",""],["InferenceVar",""],["Normalize","Proves that the given projection normalizes to the given type. A projection `T::Foo` normalizes to the type `U` if we can match it to an impl and that impl has a `type Foo = V` where `U = V`."],["Parameter",""],["PlaceholderIndex","Index of an universally quantified parameter in the environment. Two indexes are required, the one of the universe itself and the relative index inside the universe."],["ProgramClauseImplication","Represents one clause of the form `consequence :- conditions` where `conditions = cond_1 && cond_2 && ...` is the conjunction of the individual conditions."],["ProjectionEq","Proves equality between a projection `T::Foo` and a type `U`. Equality can be proven via normalization, but we can also prove that `T::Foo = V::Foo` if `T = V` without normalizing."],["ProjectionTy",""],["QuantifiedTy","for<'a...'z> X -- all binders are instantiated at once, and we use deBruijn indices within `self.ty`"],["RawId",""],["StructId",""],["Substitution","A mapping of inference variables to instantiations thereof."],["TraitId",""],["TraitRef",""],["TypeId",""],["UCanonical","A \"universe canonical\" value. This is a wrapper around a `Canonical`, indicating that the universes within have been \"renumbered\" to start from 0 and collapse unimportant distinctions."],["UniverseIndex","An universe index is how a universally quantified parameter is represented when it's binder is moved into the environment. An example chain of transformations would be: `forall<T> { Goal(T) }` (syntatical representation) `forall { Goal(?0) }` (used a DeBruijn index) `Goal(!U1)` (the quantifier was moved to the environment and replaced with a universe index) See https://rust-lang.github.io/rustc-guide/borrow_check/region_inference.html#placeholders-and-universes for more."],["UnselectedNormalize","Indicates that the trait where the associated type belongs to is not yet known, i.e. is unselected. For example, a normal `Normalize` would be of the form `<Vec<T> as Iterator>::Item -> T`. When `Iterator` is in scope, and it is the only trait in scope with an associated type `Item`, it suffices to write `Vec<T>::Item` instead of `<Vec<T> as Iterator>::Item`. The corresponding `UnselectedNormalize` is `Vec<T>::Item -> T`."],["UnselectedProjectionTy",""]],"type":[["Identifier",""],["ProjectionTyRefEnum",""],["QuantifiedWhereClause",""]]});