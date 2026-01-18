export default function ContactMe() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Entre em contato</h1>

      <div className="flex flex-col gap-4">
        <p className="text-base">Deixe sua mensagem no meu email</p>
        <textarea
          id="message"
          rows={4}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
          placeholder="Escreva sua mensagem..."
        />
      </div>
    </div>
  );
}
