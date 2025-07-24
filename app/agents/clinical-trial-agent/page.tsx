export default function ClinicalTrialAgentPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        src="https://clinical-trial-agent-chi.vercel.app/agents/clinical-trial-agent/"
        className="w-full h-full border-0"
        title="Clinical Trial Agent"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-microphone allow-camera"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
