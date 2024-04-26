/* * На сторінках MoviesDetails, Cast, Reviews в масиві залежностей повинен бути id фільма який ми отримали з рядка запиту
const { movieId } = useParams();
useEffect(() => {
if (!movieId) return;
}, [movieId]); */
