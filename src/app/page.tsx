import GoogleTitle from './components/GoogleTitle';
import Header from './components/Header';
import ReviewForm from './components/ReviewForm';

export default function Home() {
  return (
    <div className="layoutWrapper">
      <Header />
      <main className="layoutContent">
        <GoogleTitle />
        <ReviewForm />
      </main>
    </div>
  );
}
