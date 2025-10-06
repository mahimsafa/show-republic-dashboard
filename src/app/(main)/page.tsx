function RootPage() {
  return (
    <div className="w-screen overflow-hidden h-screen flex justify-center items-center">
      <div>
        <h1>Click here to go to the dashboard</h1>
        <a href="/dashboard" className="text-blue-500 underline">
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}

export default RootPage;
