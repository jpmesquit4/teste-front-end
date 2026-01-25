type PartnershipProps = {
  image: string;
  alt: string;
};

export function Partnership({ image, alt }: PartnershipProps) {
  return (
    <div className="Partnership">
      <img
        src={image}
        alt={alt}
        className="Partnership-Image"
      />

      <div className="Shadow-Partnership"></div>

      <div className="Partnership-Info">
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button aria-label="Confira alguns de nosso parceiros">
          Confira
        </button>
      </div>
    </div>
  );
}
