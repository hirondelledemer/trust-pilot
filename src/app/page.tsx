import GoogleTitle from './components/GoogleTitle';
import Header from './components/Header';
import ReviewForm from './components/ReviewForm/ReviewForm';

export default function Home() {
  return (
    <div className="layoutWrapper">
      <Header />
      <main className="h-screen">
        <GoogleTitle />
        <ReviewForm />
      </main>
    </div>
  );
}
