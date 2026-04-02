export default function MedicalCaseStudy() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          AI Medical Intake System
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          An intelligent automation system designed to streamline patient intake,
          reduce manual workload, and improve hospital response efficiency using AI-driven workflows.
        </p>
      </div>

      {/* GRID SECTIONS */}
      <div className="mt-20 grid md:grid-cols-2 gap-16">

        {/* PROBLEM */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-red-400">
            Problem
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Hospitals and clinics often face delays in patient intake due to manual data entry,
            unstructured symptom reporting, and overloaded medical staff. This leads to slow
            triage decisions and reduced patient care efficiency.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-green-400">
            Solution
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            We built an AI-powered intake system that automatically collects patient data,
            analyzes symptoms using intelligent logic, and assigns priority levels (Low, Medium, High)
            for faster medical response.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-blue-400">
            Tech Stack
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• Next.js (Frontend UI)</li>
            <li>• Node.js / API Routes</li>
            <li>• OpenAI / AI Logic Layer</li>
            <li>• n8n / Automation Workflows</li>
            <li>• Google sheets (Data Storage)</li>
            <li>• Webhooks for real-time processing</li>
          </ul>
        </div>

        {/* KEY FEATURES */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold text-purple-400">
            Key Features
          </h2>

          <ul className="text-gray-300 mt-4 space-y-2">
            <li>• AI-based symptom analysis</li>
            <li>• Automated patient intake forms</li>
            <li>• Priority-based triage system</li>
            <li>• Instant doctor notification system</li>
            <li>• Real-time data processing</li>
          </ul>
        </div>

      </div>

      {/* IMPACT SECTION */}
      <div className="mt-20 border border-white/10 rounded-2xl p-10 bg-gradient-to-r from-blue-900/20 to-transparent">

        <h2 className="text-3xl font-semibold">
          Impact
        </h2>

        <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
          This system significantly reduces patient intake time, minimizes human error,
          and allows healthcare staff to focus more on treatment rather than administrative tasks.
          It improves operational efficiency and enhances patient experience in clinical environments.
        </p>

      </div>

    </div>
  );
}