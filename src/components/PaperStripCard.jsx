export default function PaperStripCard({ cards, ...props }) {
  return (
    <>
      {cards.map((card, i) => (
        <div key={i}>
          <iframe
            class="h-20"
            src={`${card.url}`}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      ))}
    </>
  );
}
