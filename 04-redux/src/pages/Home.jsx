import { useDispatch, useSelector } from "react-redux"; // Redux store ilə əlaqə yaratmaq üçün
import { getProductThunk } from "../redux/reducers/productsSLice"; // Məhsulları əldə etmək üçün thunk
import { useEffect } from "react"; // useEffect hook-u, komponent yüklənərkən bir iş görmək üçün
import { useNavigate } from "react-router"; // Səhifələr arasında naviqasiya üçün
import { addToCart } from "../redux/reducers/cartSlice"; // Cart slice-dəki addToCart funksiyasını istifadə etmək üçün

const Home = () => {
  const dispatch = useDispatch(); // Redux-un dispatch metodunu əldə edirik

  // Redux store-dan gələn məlumatlar
  const data = useSelector(state => state.products.products); // Məhsul listini əldə edirik
  const loading = useSelector(state => state.products.loading); // Yüklənmə statusu
  const error = useSelector(state => state.products.error); // Hata mesajı

  // useEffect ilə komponent ilk dəfə yükləndikdə məhsulları API-dən yükləyirik
  useEffect(() => {
    dispatch(getProductThunk()); // Thunk çağırılır, məhsullar yüklənir
  }, [dispatch]); // Bu effekt yalnız `dispatch` dəyişəndə yenidən işləyəcək

  // Məhsulun səbətə əlavə olunması
  const handleAddToCart = (item) => {
    console.log(item, "mehsul elave edildi"); // Məhsulun əlavə olunduğunu log edirik
    dispatch(addToCart(item)); // Məhsul Redux store-a əlavə olunur
  };

  // Yüklənmə və ya səhv vəziyyətləri
  if (loading) return <span>Yuklenir. . .</span>; // Əgər yüklənir, "Yüklənir" yazısını göstər
  if (error) return <span>Yukleme ugursuz oldu</span>; // Əgər hata baş verərsə, "Yükleme uğursuz oldu" yazısını göstər

  // Məhsul siyahısını göstəririk
  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {data && data.map(item => (
        <div key={item.id} style={{ width: '15%' }}>
          <img style={{ width: '100%' }} src={item.image} alt={item.description} />
          <span>{item.title}</span>
          <p>$ {item.price}</p>
          {/* Add to Cart düyməsi tıklandıqda handleAddToCart funksiyası çağırılır */}
          <button onClick={() => { handleAddToCart(item) }}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
