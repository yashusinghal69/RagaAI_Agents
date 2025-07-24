export default function PatientCareAgentPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        src="https://caresyncai-flax.vercel.app/agents/patient-care-agent/"
        className="w-full h-full border-0"
        title="Patient Care Agent"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-microphone allow-camera"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
