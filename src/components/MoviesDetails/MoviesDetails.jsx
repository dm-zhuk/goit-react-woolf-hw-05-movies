import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
};

export default ProductDetails;

// * На сторінках MoviesDetails, Cast, Reviews в масиві залежностей повинен бути id фільма який ми отримали з рядка запиту
/* const { movieId } = useParams();
useEffect(() => {
if (!movieId) return;
}, [movieId]);

//  Коли додаємо функціонал кнопки повернення назад, перевіряти, що точно є значення from в location.state
const location = useLocation();
const backLink = location.state?.from ?? '/';

// Якщо з бека не прийшли фото акторів або постер, поставити дефолтну картинку
/* const defaultImg = 'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg'

<img src={
 movieData.poster_path ?
 `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
 : defaultImg
}
width={250}
alt="poster"
/> */
