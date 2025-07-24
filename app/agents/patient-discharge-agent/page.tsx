export default function PatientDischargeAgentPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        src="https://patient-discharge-agent-nu.vercel.app/agents/patient-discharge-agent/"
        className="w-full h-full border-0"
        title="Patient Discharge Agent"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-microphone allow-camera"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
