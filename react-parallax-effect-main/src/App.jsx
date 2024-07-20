import "./styles.css";
import Plx from 'react-plx';

export default function App() {
  return (
    <div>
      {/* Existing parallax elements */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in-out",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="/text-img.webp"
          alt="Goonies"
        />
      </Plx>
      <Plx
  parallaxData={[
    {
      start: 0,
      end: 800, // Increased duration from 400 to 800
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity"
        }
      ]
    }
  ]}
  style={{
    position: "fixed",
    left: 0,
    top: "26vw",
    width: "100%"
  }}
>
  <img
    style={{
      width: "30vw"
    }}
    src="/text-img.webp"
    alt="Goonies"
  />
</Plx>


      {/* New parallax section */}
      <div
        style={{
          position: "relative",
          zIndex: 150,
          height: "100vh",
          backgroundColor: "#f0f0f0"
        }}
      >
        <Plx
          parallaxData={[
            {
              start: 'self',
              startOffset: '80vh',
              duration: '200vh',
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity"
                },
                {
                  startValue: 1,
                  endValue: 1,
                  property: "scale"
                }
              ]
            }
          ]}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            height: "50vh",
            backgroundColor: "#ffcc00",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1 style={{ color: "#000" }}>Next Page Content</h1>
        </Plx>
      </div>
    </div>
  );
}