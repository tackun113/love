import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  &.heart-wave {
    animation: waveFade 0.6s ease forwards;
    background-color: #32c3d4;
    top: 0;
    opacity: 0;
    z-index: 99;

    .icon {
      max-width: 400px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 100%;

      .st1core {
        fill: none;
        stroke: #666666;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      }
      .st2core {
        fill: #ffffff;
        stroke: #666666;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      }
      .st3core {
        fill: #3ec0d1;
      }
      .st4core {
        fill: #dae2ea;
      }
      .st0core {
        fill: #f6f8fb;
      }

      #plus-outline-right .st1core,
      #plus-outline-left .st1core,
      #plus-outlineright .st1core,
      #circle-outline-bottom,
      #times-left .st1core {
        stroke: #fff;
      }

      #circle-outline-bottom {
        fill: none;
        stroke: #fff;
      }

      #circle-fill-left,
      #circle-fill-bottom,
      #square-fill-top,
      #square-fill-right,
      #square-fillright {
        fill: #fff;
      }

      #mask_1 {
        fill: #32c3d4;
      }
      #heart-color-wave {
        fill: none;
      }
      #heart-fill-white {
        fill: #74d5e0;
      }
      #heart-border-fill_1_ {
        stroke: #fff;
      }

      .st4core {
        fill: none;
      }

      #line_01,
      #line_10,
      #line_11,
      #line_12,
      #line_13,
      #line_14,
      #line_15,
      #line_16 {
        transform: rotate(180deg);
      }

      // Lines
      #sparks .st1core {
        transform-origin: center center;
        transform-box: fill-box;
        stroke: #fff;
        stroke-dashoffset: 11;
        stroke-dasharray: 11;
      }

      #times-left,
      #plus-outlineright,
      #plus-outline-left,
      #square-fillright,
      #square-fill-top,
      #circle-fill-left,
      #circle-fill-bottom {
        transform-origin: center center;
        transform-box: fill-box;
        transform: scale(0);
        transition: all;
      }

      #circle-outline-bottom {
        stroke-dasharray: 30;
        stroke-dashoffset: -30;
        transition: all 1s;
        opacity: 0;
      }

      // Animation
      &.animated {
        // animation: globalScale 1s ease .8s forwards;
        will-change: transform;

        #plus-outlineright,
        #times-left,
        #circle-fill-left,
        #circle-fill-bottom {
          animation: Scale 0.7s ease 0.2s forwards;
        }

        #plus-outline-left,
        #circle-fill-left,
        #square-fill-top,
        #square-fillright {
          animation: Scale 0.7s ease 0.4s forwards;
        }

        #sparks .st1core {
          animation: drawLine 0.7s ease forwards;
          transform-origin: center;
        }

        #circle-outline-bottom {
          animation: drawCircle 0.7s ease forwards;
        }
      }
    }

    // Box waves
    .box-wave {
      background-color: #34aab8;
      top: 50%;
      transform: translate3d(-50%, calc(-50% + 7px), 0);
      left: 50%;
      overflow: hidden;
      position: absolute;
      z-index: -1;
      height: 114px;
      width: 140px;

      &.animated {
        animation: waveFadeOff 0.3s ease 0.8s forwards;
        will-change: opacity;
      }

      .wave {
        animation: drift 3s infinite linear, upDown 20s infinite linear;
        background-color: #2a8691;
        border-radius: 43%;
        transform-origin: 50% 48%;
        transition: all 1s ease-in-out;
        opacity: 0.8;
        position: absolute;
        left: 0;
        height: 150px;
        width: 150px;
        will-change: bottom, transform;
      }

      .wave.left {
        left: -30%;
      }
      .wave.right {
        left: 30%;
      }
      .wave.three {
        animation: drift 5s infinite linear, upDown 20s infinite linear;
      }

      .wave.two {
        animation: drift 7s infinite linear, upDown 20s infinite linear;
        opacity: 0.1;
      }
    }
  }

  @keyframes drawLine {
    to {
      stroke-dashoffset: -10;
    }
  }

  @keyframes waveFade {
    to {
      opacity: 1;
    }
  }
  @keyframes waveFadeOff {
    to {
      opacity: 0;
    }
  }

  @keyframes globalScale {
    to {
      transform: translate3d(-50%, -50%, 0) scale(2);
      opacity: 0;
    }
  }

  @keyframes drawCircle {
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 30;
      opacity: 0;
    }
  }

  @keyframes Scale {
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes drift {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes upDown {
    0% {
      bottom: 0%;
    }
    50% {
      bottom: 100%;
    }
    100% {
      bottom: 0%;
    }
  }
`;

const Heart = (props) => {
  const heartRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      heartRef.current.classList.toggle("animated");
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container className="heart-wave">
      <svg id="heart-svg" className="icon" ref={heartRef} viewBox="0 0 180 180">
        <path
          id="mask_1"
          className="st0core"
          d="M0.2,0.3v180h180V0.3H0.2z M110.5,103.5c0,0-10.4,10-20.4,15c-10-5-20-15-20-15 C52.6,86,62.4,70.1,72.6,68.4c15-2.5,17.5,10,17.5,10s3.9-12.3,17.9-10C118.2,70.1,128,85.9,110.5,103.5z"
        />
        <path
          id="heart-fill-white"
          className="st0core"
          d="M129,75.9c-2.8-8.6-9.9-15-18.2-16.3c-9.1-1.5-15.8,1.3-20.4,5.2 c-4.6-4.1-11.4-6.7-20.8-5.2C61.3,61,54.2,67.4,51.4,76C48,87,52.2,99.5,63,110.3c0.5,0.5,11.9,11.9,23.8,17.8l3.3,1.6l3.3-1.6 c11.8-5.9,23.7-17.2,24.3-17.8C128.4,99.5,132.6,86.9,129,75.9z M110.5,103.5c0,0-10.4,10-20.4,15c-10-5-20-15-20-15 C52.6,86,62.4,70.1,72.6,68.4c15-2.5,17.5,10,17.5,10s3.9-12.3,17.9-10C118.2,70.1,128,85.9,110.5,103.5z"
        />

        <g id="confetti">
          <g id="times-left">
            <line className="st1core" x1="18.8" y1="149.3" x2="26" y2="156.5" />
            <line className="st1core" x1="26" y1="149.3" x2="18.8" y2="156.5" />
          </g>
          <g id="plus-outlineright">
            <line
              className="st1core"
              x1="148.4"
              y1="25.5"
              x2="158.6"
              y2="25.5"
            />
            <line
              className="st1core"
              x1="153.5"
              y1="20.4"
              x2="153.5"
              y2="30.6"
            />
          </g>
          <g id="plus-outline-left">
            <line className="st1core" x1="16.4" y1="30.9" x2="26.7" y2="30.9" />
            <line className="st1core" x1="21.6" y1="25.8" x2="21.6" y2="36" />
          </g>
          <circle
            id="circle-outline-bottom"
            className="st2core"
            cx="136.2"
            cy="174.1"
            r="4.9"
          />
          <circle
            id="circle-fill-left"
            className="st3core"
            cx="3.6"
            cy="90.7"
            r="3.7"
          />
          <circle
            id="circle-fill-bottom"
            className="st3core"
            cx="79.3"
            cy="160.1"
            r="3.7"
          />
          <rect
            id="square-fill-top"
            x="62"
            y="0.3"
            className="st3core"
            width="6.9"
            height="6.9"
          />
          <rect
            id="square-fillright"
            x="172.8"
            y="89.3"
            className="st3core"
            width="6.9"
            height="6.9"
          />
        </g>

        <g id="sparks">
          <line
            id="line_16"
            className="st1core"
            x1="68.4"
            y1="36.9"
            x2="71.9"
            y2="45.3"
          />
          <line
            id="line_15"
            className="st1core"
            x1="49.9"
            y1="49.2"
            x2="56.4"
            y2="55.7"
          />
          <line
            id="line_14"
            className="st1core"
            x1="37.5"
            y1="67.8"
            x2="46"
            y2="71.3"
          />
          <line
            id="line_13"
            className="st1core"
            x1="34.2"
            y1="89.6"
            x2="43.3"
            y2="89.6"
          />
          <line
            id="line_12"
            className="st1core"
            x1="37.5"
            y1="111.5"
            x2="46"
            y2="108"
          />
          <line
            id="line_11"
            className="st1core"
            x1="49.9"
            y1="130"
            x2="56.4"
            y2="123.6"
          />
          <line
            id="line_10"
            className="st1core"
            x1="68.4"
            y1="142.4"
            x2="71.9"
            y2="134"
          />
          <line
            id="line_09"
            className="st1core"
            x1="90.3"
            y1="137.6"
            x2="90.3"
            y2="146.7"
          />
          <line
            id="line_08"
            className="st1core"
            x1="108.7"
            y1="134"
            x2="112.2"
            y2="142.4"
          />
          <line
            id="line_07"
            className="st1core"
            x1="124.2"
            y1="123.6"
            x2="130.7"
            y2="130"
          />
          <line
            id="line_06"
            className="st1core"
            x1="134.6"
            y1="108"
            x2="143.1"
            y2="111.5"
          />
          <line
            id="line_05"
            className="st1core"
            x1="138.3"
            y1="89.6"
            x2="147.4"
            y2="89.6"
          />
          <line
            id="line_04"
            className="st1core"
            x1="134.6"
            y1="71.3"
            x2="143.1"
            y2="67.8"
          />
          <line
            id="line_03"
            className="st1core"
            x1="124.2"
            y1="55.7"
            x2="130.7"
            y2="49.2"
          />
          <line
            id="line_02"
            className="st1core"
            x1="108.7"
            y1="45.3"
            x2="112.2"
            y2="36.9"
          />
          <line
            id="line_01"
            className="st1core"
            x1="90.3"
            y1="32.5"
            x2="90.3"
            y2="41.7"
          />
        </g>

        <path
          id="heart-gray"
          className="st4core"
          d="M90.1,118.5c-10-5-20-15-20-15C52.6,86,62.4,70.1,72.6,68.4c15-2.5,17.5,10,17.5,10 s3.9-12.3,17.9-10c10.2,1.7,20,17.5,2.5,35.1C110.5,103.5,100.1,113.5,90.1,118.5z"
        />
        <path
          id="heart-color-wave"
          className="st3core"
          d="M90.1,118.5c10-5,20.4-15,20.4-15c2-2,3.6-4,5-5.9c-5.9,3-14.3,4.7-24.8-0.3c-13.9-6.6-23-4.9-27.5-3 c1.5,3,3.8,6.1,6.9,9.2C70.1,103.5,80.1,113.5,90.1,118.5z"
        />
        <path
          id="heart-border-fill_1_"
          className="st1core"
          d="M129,75.9c-2.8-8.6-9.9-15-18.2-16.3c-9.1-1.5-15.8,1.3-20.4,5.2 c-4.6-4.1-11.4-6.7-20.8-5.2C61.3,61,54.2,67.4,51.4,76C48,87,52.2,99.5,63,110.3c0.5,0.5,11.9,11.9,23.8,17.8l3.3,1.6l3.3-1.6 c11.8-5.9,23.7-17.2,24.3-17.8C128.4,99.5,132.6,86.9,129,75.9z"
        />
      </svg>

      <div id="heart-waves" className="box-wave">
        <div className="wave one left"></div>
        <div className="wave two left"></div>
        <div className="wave three left"></div>
        <div className="wave one center"></div>
        <div className="wave two center"></div>
        <div className="wave three center"></div>
        <div className="wave one right"></div>
        <div className="wave two right"></div>
        <div className="wave -three right"></div>
      </div>
    </Container>
  );
};

export default Heart;
