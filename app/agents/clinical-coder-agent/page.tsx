export default function ClinicalCoderAgentPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        src="https://clinical-coder-agent.vercel.app/agents/clinical-coder-agent/"
        className="w-full h-full border-0"
        title="Clinical Coder Agent"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-microphone allow-camera"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
