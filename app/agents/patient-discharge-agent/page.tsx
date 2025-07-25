export default function PatientDischargeAgentPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Preconnect for faster loading */}
      <link
        rel="preconnect"
        href="https://patient-discharge-agent-nu.vercel.app"
      />
      <link
        rel="dns-prefetch"
        href="https://patient-discharge-agent-nu.vercel.app"
      />

      <iframe
        src="https://patient-discharge-agent-nu.vercel.app/agents/patient-discharge-agent/"
        className="w-full h-full border-0"
        title="Patient Discharge Agent"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-microphone allow-camera allow-downloads allow-modals allow-storage-access-api"
        referrerPolicy="no-referrer-when-downgrade"
        loading="eager"
      />
    </div>
  );
}
