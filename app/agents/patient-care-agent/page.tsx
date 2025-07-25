export default function PatientCareAgentPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Preconnect for faster loading */}
      <link rel="preconnect" href="https://caresyncai-flax.vercel.app" />
      <link rel="dns-prefetch" href="https://caresyncai-flax.vercel.app" />

      <iframe
        src="https://caresyncai-flax.vercel.app/agents/patient-care-agent/"
        className="w-full h-full border-0"
        title="Patient Care Agent"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; microphone; camera"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-microphone allow-camera allow-downloads allow-modals allow-storage-access-api"
        referrerPolicy="no-referrer-when-downgrade"
        loading="eager"
      />
    </div>
  );
}
