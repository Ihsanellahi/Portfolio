export default function Results() {
  return (
    <div className="py-16 text-center">

      <h2 className="text-3xl font-bold">Results 📈</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="shadow p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-green-600">80%</h3>
          <p>Manual Work Reduced</p>
        </div>

        <div className="shadow p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-blue-600">3x</h3>
          <p>Faster Response Time</p>
        </div>

        <div className="shadow p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-purple-600">10+</h3>
          <p>Hours Saved Weekly</p>
        </div>

      </div>

    </div>
  );
}