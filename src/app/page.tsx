'use client'; // todo: do not use client

import Header from './components/Header';

export default function Home() {
  // const supabase = createClient();
  // const prisma = new PrismaClient({});
  const handleSubmit = async () => {
    // try {
    // setLoading(true)
    // const { error } = await prisma..from('Review').upsert({
    //   title: 'test',
    //   rating: 1,
    //   content: 'trolol ol ol ol o l o',
    //   date: new Date(),
    // });
    //   const newUser = await prisma.review.create({
    //     data: {
    //       title: 'test',
    //       rating: 1,
    //       content: 'trolol ol ol ol o l o',
    //       date: new Date(),
    //     },
    //   });
    //   console.log('new', newUser);
    //   // if (error) throw error;
    //   alert('Profile updated!');
    // } catch (error) {
    //   console.log(error);
    //   alert('Error updating the data!');
    // } finally {
    //   // setLoading(false);
    // }

    try {
      const body = {
        title: 'test',
        rating: 1,
        content: 'trolol ol ol ol o l o',
        date: new Date(),
      };
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="layoutWrapper">
      <Header />
      here
      <button onClick={handleSubmit}>sumbit review</button>
    </div>
  );
}
