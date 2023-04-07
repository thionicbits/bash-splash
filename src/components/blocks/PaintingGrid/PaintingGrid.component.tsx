import './PaintingGrid.styles.scss';

interface IProps {
  width: number;
  height: number;
}

const PaintingGrid = ({ width, height }: IProps): JSX.Element => (
  <div className="painting-grid">
    {Array.from(
      {
        length: height,
      },
      (_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from(
            {
              length: width,
            },
            (_, columnIndex) => (
              <div className="box" key={columnIndex}></div>
            )
          )}
        </div>
      )
    )}
  </div>
);

export default PaintingGrid;
