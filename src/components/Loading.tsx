interface Props {
  onStartButtonClick: () => void;
  camKitLoaded: boolean;
}

export const Loading = ({ onStartButtonClick, camKitLoaded }: Props) => {
  return (
    <div className="loading">
      <section>
        <h2>How to use AR</h2>
        <ol type="1">
          <li>
            <span>1</span>
            <img src="magnifying-glass.png" />
            <p>Find a flat surface & enable motion permissions</p>
          </li>

          <li>
            <span>2</span>
            <img src="camera.png" />
            <p>Aim your phone camera at the hoop</p>
          </li>
          <li>
            <span>3</span>
            <img src="power.png" />
            <p>Use the power bar to shoot</p>
          </li>
          <li>
            <span>4</span>
            <img src="repeat.png" />
            <p>Score and repeat</p>
          </li>
        </ol>
        <br />
        <p>If you win the AR game, you'll win:</p>
        <article>
          <img src="tickets.png" />
          FREE Game-Day Ticket
        </article>

        <button
          disabled={!camKitLoaded}
          onClick={() => {
            onStartButtonClick();
          }}
        >
          Start
        </button>
      </section>
    </div>
  );
};
