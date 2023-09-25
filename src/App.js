import CardsDiv from './Components/CardsDiv';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] p-5 md:p-20">
      <div>
        <div className="text-center mb-20">
          <h2 className="text-[#4c4e61] text-3xl font-extralight">
            Reliable, efficient delivery
          </h2>
          <h2 className="text-[#4c4e61] mt-1 mb-3 text-3xl font-bold">
            Powered by Technology
          </h2>
          <p className="text-[#a3a5ae] text-[15px] max-w-[500px] m-auto">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <CardsDiv />
      </div>
    </div>
  );
}

export default App;
