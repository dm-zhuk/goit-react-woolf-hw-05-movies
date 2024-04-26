/* import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
 */

// <Route path="/about" element={<About />} />;

///\\\
/* import { Routes, Route, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";

export const App () => {
    return (
     <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>    
    )
}
///\\\
import { Routes, Route } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

///\\\
<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/products">Products</Link>
</nav>
 */
///\\\
/* import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'path/to/pages/Home';
import About from 'path/to/pages/About';
import Products from 'path/to/pages/Products';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
// :postId - URL-param
<Route path="/blog/:postId" element={<BlogPost />} />;
 */
///
/* import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import About from 'path/to/pages/About';
import Products from 'path/to/pages/Products';
import NotFound from 'path/to/pages/NotFound';
import ProductDetails from 'path/to/pages/ProductDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
const { genreId, authorName } = useParams();
console.log(genreId, authorName); // adventure, herman-melville
 */

/* import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import About from 'path/to/pages/About';
import Products from 'path/to/pages/Products';
import NotFound from 'path/to/pages/NotFound';
import ProductDetails from 'path/to/pages/ProductDetails';
import Mission from 'path/to/components/Mission';
import Team from 'path/to/components/Team';
import Reviews from 'path/to/components/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}; */

/* // Imports
export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};
///\\\
<Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}>
      <Route path="mission" element={<Mission />} />
      <Route path="team" element={<Team />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="products" element={<Products />} />
    <Route path="products/:productId" element={<ProductDetails />} />
  </Route>
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="sales" element={<Sales />} />
    <Route path="customers" element={<Customers />} />
  </Route>
</Routes>

 */

const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? 'products';

  return <Link to={backLinkHref}>Back to products</Link>;
};
///\\\

{
  /* const [user, setUser] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get('username');

  useEffect(() => {
    // Тут виконуємо асинхронну операцію,
    // наприклад HTTP-запит за інформацією про користувача
    if (username === '') return;

    async function fetchUser() {
      const user = await FakeAPI.getUser(username);
      setUser(user);
    }

    fetchUser();
  }, [username]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ username: form.elements.username.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && <UserInfo user={user} />}
    </>
  ); */
}
