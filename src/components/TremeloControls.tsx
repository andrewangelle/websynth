export function TremeloControls({
  tremeloSpeed,
  onTremeloClick,
  onTremeloSpeedClick
}: {
  tremeloSpeed: string;
  onTremeloClick: (speed: string) => void; 
  onTremeloSpeedClick: (speed: string) => void;
}){

  return (
    <>
      <label
        style={{ width: '200px', margin: '10px auto auto' }}
        htmlFor="volume"
      >
        Tremelo Speed
      </label>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {['fast', 'medium', 'slow'].map((value, index) => {
          return (
            <button
              key={value}
              onClick={() => onTremeloSpeedClick(value)}
              style={{
                color: tremeloSpeed === value ? 'blue' : '',
                borderColor: tremeloSpeed === value ? 'blue' : ''
              }}
            >
              {value}
            </button>
          )
        })}
      </div>

      <button
        style={{ width: '25%', margin: 'auto' }}
        onClick={() => onTremeloClick(tremeloSpeed)}
      >
        Tremelo
      </button>
    </>
  )
}