import React from "react"

const Logo = ({ showSubtext, width, height, mono, ...rest }) => (
  <svg
    viewBox="0 0 231 111"
    css={`
      width: ${width ? `${width}` : "220px"};
      height: ${height ? `${height}` : "auto"};
      vertical-align: top;
      transition: all 500ms cubic-bezier(0.4, 0, 1, 1);
    `}
    {...rest}>
    <title>Live Resin Project</title>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <g
          transform="translate(90.000000, 0.000000)"
          fill={mono ? "#FFF" : "#000000"}>
          <polygon points="17.791 22.432 17.791 29.161 0.85 29.161 0.85 2.493 8.291 2.493 8.291 22.432" />
          <path d="M19.783,8.589 L26.87,8.589 L26.87,29.163 L19.783,29.163 L19.783,8.589 Z M19.838,0 L26.815,0 L26.815,6.014 L19.838,6.014 L19.838,0 Z" />
          <polygon points="51.232 8.589 42.961 29.164 36.541 29.164 28.16 8.589 35.925 8.589 39.813 20.775 43.658 8.589" />
          <path d="M72.841,18.682 C72.8371625,19.3100541 72.7880351,19.9370137 72.694,20.558 L57.417,20.558 C57.63781,22.6806754 59.4861443,24.2561604 61.617,24.138 C63.1153513,24.2185193 64.5394937,23.4800326 65.337,22.209 L72.391,22.209 C70.62561,27.3748736 65.4139459,30.5348652 60.0171752,29.711629 C54.6204045,28.8883928 50.5879096,24.3182752 50.443,18.861 C50.443,12.553 55.161,7.915 61.619,7.915 C68.251,7.915 72.843,12.647 72.843,18.681 L72.841,18.682 Z M57.541,16.634 L65.858,16.634 C65.393919,14.6928561 63.6089598,13.3606588 61.616,13.468 C59.6660932,13.3816787 57.941041,14.72141 57.542,16.632 L57.541,16.634 Z" />
          <path d="M10.862,52.759 L8.198,52.759 L8.198,60.92 L0.85,60.92 L0.85,34.248 L12.41,34.248 C18.16,34.248 22.328,38.112 22.328,43.687 C22.3845691,46.7790995 20.7650176,49.6601722 18.094,51.219 L23.394,60.919 L15.194,60.919 L10.862,52.759 Z M8.198,46.569 L11.554,46.569 C13.608,46.569 14.791,45.332 14.791,43.669 C14.791,42.006 13.608,40.782 11.554,40.782 L8.198,40.782 L8.198,46.569 Z" />
          <path d="M46.051,50.438 C46.0474277,51.0660272 45.9986348,51.6929819 45.905,52.314 L30.628,52.314 C30.84881,54.4366754 32.6971443,56.0121604 34.828,55.894 C36.3262579,55.9740862 37.7501935,55.2357067 38.548,53.965 L45.6,53.965 C43.8345232,59.1310138 38.6225963,62.290982 33.2257034,61.4674813 C27.8288104,60.6439805 23.7964647,56.0734479 23.652,50.616 C23.652,44.308 28.37,39.671 34.828,39.671 C41.46,39.671 46.051,44.402 46.051,50.437 L46.051,50.438 Z M30.751,48.389 L39.068,48.389 C38.6035615,46.4480915 36.8188358,45.1160685 34.826,45.223 C32.8758458,45.1373575 31.1511353,46.4779991 30.753,48.389 L30.751,48.389 Z" />
          <path d="M56.262,61.593 C50.655,61.593 47.247,58.632 47.182,54.174 L54.004,54.174 C53.9751593,54.800094 54.2248352,55.4068608 54.6859704,55.8313367 C55.1471056,56.2558126 55.7724316,56.4544869 56.394,56.374 C57.431,56.374 58.414,55.845 58.414,54.782 C58.414,53.595 56.856,53.257 54.88,52.929 C51.689,52.413 47.461,51.45 47.461,46.46 C47.461,42.336 50.974,39.673 56.247,39.673 C61.486,39.673 64.882,42.46 64.962,46.629 L58.326,46.629 C58.326,45.316 57.442,44.705 56.158,44.705 C55.022,44.705 54.258,45.267 54.258,46.221 C54.258,47.392 55.832,47.664 57.786,48.012 C61.036,48.59 65.358,49.265 65.358,54.483 C65.358,58.783 61.729,61.596 56.258,61.596 L56.262,61.593 Z" />
          <path d="M67.721,40.344 L74.808,40.344 L74.808,60.919 L67.721,60.919 L67.721,40.344 Z M67.776,31.756 L74.754,31.756 L74.754,37.77 L67.776,37.77 L67.776,31.756 Z" />
          <path d="M98.652,48.374 L98.652,60.92 L91.565,60.92 L91.565,49.353 C91.565,46.953 90.665,45.77 88.883,45.77 C86.673,45.77 85.401,47.314 85.401,49.932 L85.401,60.92 L78.314,60.92 L78.314,40.344 L83.291,40.344 L84.264,42.466 C85.9322142,40.6701433 88.2906017,39.6761032 90.741,39.736 C95.514,39.732 98.652,43.132 98.652,48.374 Z" />
          <path d="M22.091,75.64 C22.1414523,78.2566243 21.1094257,80.7780001 19.2387967,82.6083049 C17.3681677,84.4386096 14.8249038,85.4154535 12.21,85.308 L8.219,85.308 L8.219,92.675 L0.854,92.675 L0.854,66.004 L12.21,66.004 C17.875,66.004 22.091,70.048 22.091,75.64 Z M14.537,75.657 C14.5871348,74.7892893 14.2662696,73.9411353 13.6543584,73.3238833 C13.0424472,72.7066312 12.1971136,72.3784076 11.329,72.421 L8.219,72.421 L8.219,78.893 L11.329,78.893 C12.1963476,78.9340997 13.0404033,78.6052559 13.6513404,77.9882171 C14.2622774,77.3711783 14.5827171,76.5238963 14.533,75.657 L14.537,75.657 Z" />
          <path d="M37.525,72.003 L37.525,78.487 L34.774,78.487 C32.265,78.487 31.215,79.587 31.215,82.213 L31.215,92.675 L24.128,92.675 L24.128,72.1 L28.876,72.1 L29.981,74.384 C31.3893997,72.741859 33.4893804,71.8595484 35.648,72.003 L37.525,72.003 Z" />
          <path d="M37.715,82.387 C37.715,76.009 42.542,71.426 49.25,71.426 C55.936,71.426 60.785,76.009 60.785,82.387 C60.785,88.743 55.936,93.349 49.25,93.349 C42.542,93.349 37.715,88.743 37.715,82.387 Z M49.25,86.987 C51.1238583,87.053033 52.8502578,85.9751126 53.6135717,84.2624955 C54.3768856,82.5498784 54.0243273,80.545366 52.7224608,79.1959776 C51.4205944,77.8465892 49.4300042,77.4224214 47.6911323,78.1238697 C45.9522603,78.825318 44.8131631,80.5119789 44.812,82.387 C44.7357467,83.6004217 45.1731577,84.7899971 46.0173235,85.6649774 C46.8614894,86.5399578 48.0346251,87.0197188 49.25,86.987 L49.25,86.987 Z" />
          <path d="M59.263,94.257 L61.007,94.257 C62.679,94.257 63.567,93.303 63.567,91.534 L63.567,72.1 L70.654,72.1 L70.654,92.12 C70.654,97.393 67.426,100.509 61.926,100.509 L59.263,100.509 L59.263,94.257 Z M63.622,63.511 L70.599,63.511 L70.599,69.525 L63.622,69.525 L63.622,63.511 Z" />
          <path d="M95.361,82.193 C95.357023,82.8210103 95.3082324,83.4479361 95.215,84.069 L79.937,84.069 C80.15781,86.1916754 82.0061443,87.7671604 84.137,87.649 C85.6353981,87.7297361 87.059644,86.9911957 87.857,85.72 L94.91,85.72 C93.14461,90.8858736 87.9329459,94.0458652 82.5361752,93.222629 C77.1394045,92.3993928 73.1069096,87.8292752 72.962,82.372 C72.962,76.064 77.679,71.426 84.137,71.426 C90.769,71.426 95.361,76.158 95.361,82.192 L95.361,82.193 Z M80.061,80.145 L88.379,80.145 C87.9141382,78.2039381 86.1290791,76.8719803 84.136,76.979 C82.1856101,76.8932776 80.4605707,78.2338458 80.062,80.145 L80.061,80.145 Z" />
          <path d="M107.813,93.348 C101.213,93.348 96.452,88.725 96.452,82.359 C96.452,75.993 101.192,71.459 107.835,71.459 C113.617,71.459 117.954,75.104 118.728,80.577 L111.828,80.577 C111.22333,78.8884612 109.608207,77.774417 107.815,77.809 C106.627491,77.8027958 105.491495,78.2934783 104.681942,79.1622944 C103.87239,80.0311105 103.463054,81.1988857 103.553,82.383 C103.46547,83.5705406 103.874299,84.7412089 104.68208,85.6160832 C105.48986,86.4909575 106.62426,86.9916984 107.815,86.999 C109.679884,87.0190001 111.328603,85.7913608 111.844,83.999 L118.806,83.999 C118.125176,89.4966567 113.350742,93.5591179 107.815,93.351 L107.813,93.348 Z" />
          <path d="M134.602,86.467 L134.602,92.675 L129.726,92.675 C125.176,92.675 122.411,89.893 122.411,85.321 L122.411,77.557 L118.644,77.557 L118.644,75.901 L127.863,66.085 L129.319,66.085 L129.319,72.1 L134.491,72.1 L134.491,77.557 L129.502,77.557 L129.502,84.105 C129.445115,84.751141 129.678783,85.389075 130.139562,85.8456019 C130.600341,86.3021287 131.240414,86.5298724 131.886,86.467 L134.602,86.467 Z" />
        </g>
        <g
          transform="translate(225.000000, 66.000000)"
          fill={mono ? "#FFF" : "#000000"}>
          <polygon points="2.238 1.215 1.491 1.215 1.491 3.377 1.072 3.377 1.072 1.215 0.324 1.215 0.324 0.824 2.239 0.824" />
          <polygon points="5.153 3.377 4.853 1.526 4.023 3.338 3.916 3.338 3.086 1.527 2.786 3.377 2.359 3.377 2.776 0.824 3.188 0.824 3.966 2.559 4.749 0.824 5.166 0.824 5.577 3.377" />
        </g>
        <g
          transform="translate(90.000000, 104.000000)"
          fill="#000000"
          style={{
            opacity: showSubtext === true ? 1 : 0,
            transition: "opacity 500ms cubic-bezier(0.4, 0, 1, 1)",
          }}>
          <polygon points="5.104 2.586 3.68 2.586 3.68 6.532 2.229 6.532 2.229 2.588 0.804 2.588 0.804 1.288 5.104 1.288" />
          <path d="M8.846,4.925 L8.323,4.925 L8.323,6.525 L6.877,6.525 L6.877,1.281 L9.151,1.281 C9.66115784,1.2474106 10.162106,1.42876516 10.5325338,1.78114642 C10.9029615,2.13352769 11.109089,2.62480157 11.101,3.136 C11.1124954,3.74421016 10.7937259,4.31095415 10.268,4.617 L11.31,6.525 L9.697,6.525 L8.846,4.925 Z M8.323,3.708 L8.982,3.708 C9.20053876,3.73226593 9.41368882,3.62933531 9.53057274,3.44309306 C9.64745665,3.25685082 9.64745665,3.02014918 9.53057274,2.83390694 C9.41368882,2.64766469 9.20053876,2.54473407 8.982,2.569 L8.323,2.569 L8.323,3.708 Z" />
          <path d="M13.014,4.501 L13.014,1.286 L14.491,1.286 L14.491,4.474 C14.476112,4.7740777 14.6277305,5.05795714 14.8854073,5.21245939 C15.1430841,5.36696165 15.4649159,5.36696165 15.7225927,5.21245939 C15.9802695,5.05795714 16.131888,4.7740777 16.117,4.474 L16.117,1.286 L17.591,1.286 L17.591,4.501 C17.5237739,5.71632666 16.5186846,6.66735581 15.3015,6.66735581 C14.0843154,6.66735581 13.0792261,5.71632666 13.012,4.501 L13.014,4.501 Z" />
          <polygon points="23.1 5.277 23.1 6.532 19.681 6.532 19.681 1.288 23.037 1.288 23.037 2.532 21.12 2.532 21.12 3.303 22.842 3.303 22.842 4.489 21.12 4.489 21.12 5.274" />
          <polygon points="31.231 5.277 31.231 6.532 27.813 6.532 27.813 1.288 31.168 1.288 31.168 2.532 29.251 2.532 29.251 3.303 30.974 3.303 30.974 4.489 29.251 4.489 29.251 5.274" />
          <path d="M32.934,4.832 L34.424,4.832 C34.4226875,4.99122781 34.489707,5.14337683 34.6080736,5.24988767 C34.7264402,5.35639852 34.8847929,5.40704802 35.043,5.389 C35.343,5.389 35.634,5.228 35.634,4.942 C35.634,4.613 35.226,4.517 34.727,4.397 C33.969,4.208 33.001,3.976 33.001,2.782 C33.001,1.749 33.76,1.158 35.001,1.158 C36.259,1.158 36.98,1.803 36.98,2.869 L35.53,2.869 C35.5320289,2.72861335 35.4729964,2.59426394 35.3682181,2.50080786 C35.2634398,2.40735178 35.1232427,2.36400005 34.984,2.382 C34.727,2.382 34.484,2.494 34.484,2.739 C34.484,3.039 34.879,3.139 35.372,3.259 C36.145,3.459 37.154,3.716 37.154,4.914 C37.154,6.06 36.274,6.654 35.054,6.654 C33.764,6.658 32.934,5.98 32.934,4.832 Z" />
          <path d="M38.774,4.832 L40.265,4.832 C40.2636875,4.99122781 40.330707,5.14337683 40.4490736,5.24988767 C40.5674402,5.35639852 40.7257929,5.40704802 40.884,5.389 C41.184,5.389 41.475,5.228 41.475,4.942 C41.475,4.613 41.066,4.517 40.567,4.397 C39.81,4.208 38.842,3.976 38.842,2.782 C38.842,1.749 39.601,1.158 40.842,1.158 C42.1,1.158 42.82,1.803 42.82,2.869 L41.371,2.869 C41.3730289,2.72861335 41.3139964,2.59426394 41.2092181,2.50080786 C41.1044398,2.40735178 40.9642427,2.36400005 40.825,2.382 C40.567,2.382 40.325,2.494 40.325,2.739 C40.325,3.039 40.725,3.139 41.214,3.259 C41.987,3.459 42.995,3.716 42.995,4.914 C42.995,6.06 42.115,6.654 40.895,6.654 C39.604,6.658 38.774,5.98 38.774,4.832 Z" />
          <polygon points="48.291 5.277 48.291 6.532 44.872 6.532 44.872 1.288 48.228 1.288 48.228 2.532 46.311 2.532 46.311 3.303 48.033 3.303 48.033 4.489 46.311 4.489 46.311 5.274" />
          <polygon points="54.924 1.286 54.924 6.532 53.724 6.532 51.641 3.686 51.641 6.532 50.241 6.532 50.241 1.288 51.506 1.288 53.519 4.039 53.519 1.288" />
          <path d="M56.791,3.912 C56.7761216,3.17055853 57.0661871,2.45550128 57.5933988,1.9339606 C58.1206105,1.41241991 58.8387628,1.13010423 59.58,1.153 C60.9050038,1.11358762 62.0475133,2.07731072 62.232,3.39 L60.771,3.39 C60.6152188,2.86494691 60.1336716,2.50409131 59.586,2.502 C58.858881,2.56643483 58.3013734,3.17553161 58.3013734,3.9055 C58.3013734,4.63546839 58.858881,5.24456517 59.586,5.309 C60.1598623,5.31135022 60.655899,4.90900004 60.772,4.347 L62.25,4.347 C62.0932597,5.69230304 60.9369913,6.69639662 59.583,6.663 C58.8421732,6.68839842 58.1234871,6.40810295 57.5954731,5.88784279 C57.0674592,5.36758264 56.7765631,4.6531214 56.791,3.912 Z" />
          <polygon points="67.491 5.277 67.491 6.532 64.072 6.532 64.072 1.288 67.428 1.288 67.428 2.532 65.511 2.532 65.511 3.303 67.233 3.303 67.233 4.489 65.511 4.489 65.511 5.274" />
          <path d="M71.925,3.908 C71.8706667,2.72941739 72.5387066,1.63629533 73.612312,1.14703012 C74.6859174,0.657764903 75.9491791,0.870751096 76.8030146,1.68498328 C77.6568501,2.49921546 77.9295473,3.75094599 77.4917837,4.84656097 C77.0540202,5.94217594 75.9938332,6.66133974 74.814,6.663 C74.0577579,6.70986012 73.3162249,6.43927388 72.7678897,5.91637196 C72.2195544,5.39347004 71.9140819,4.66561386 71.925,3.908 Z M76.19,3.908 C76.1735032,3.14945211 75.5477351,2.54649665 74.7890976,2.55816818 C74.0304602,2.56983971 73.4235366,3.19175995 73.4303824,3.95045632 C73.4372282,4.70915269 74.0552754,5.32001985 74.814,5.318 C75.1877025,5.32703736 75.5483322,5.18025956 75.809509,4.91282366 C76.0706857,4.64538777 76.2088834,4.28138377 76.191,3.908 L76.19,3.908 Z" />
          <polygon points="81.018 2.592 81.018 3.427 82.702 3.427 82.702 4.692 81.018 4.692 81.018 6.532 79.56 6.532 79.56 1.288 82.897 1.288 82.897 2.594" />
          <path d="M87.111,3.912 C87.0964116,3.17064423 87.3865696,2.45575785 87.9137162,1.93428148 C88.4408629,1.4128051 89.1588453,1.1303951 89.9,1.153 C91.2244171,1.11582938 92.3659151,2.07833632 92.553,3.39 L91.091,3.39 C90.9345457,2.86498849 90.4528227,2.50430556 89.905,2.502 C89.177881,2.56643483 88.6203734,3.17553161 88.6203734,3.9055 C88.6203734,4.63546839 89.177881,5.24456517 89.905,5.309 C90.4789632,5.31104862 90.9751197,4.90894038 91.092,4.347 L92.569,4.347 C92.4127074,5.69253943 91.2561626,6.69687307 89.902,6.663 C89.161754,6.68666026 88.4441823,6.40576648 87.9167159,5.88585964 C87.3892495,5.36595279 87.0980273,4.65251037 87.111,3.912 L87.111,3.912 Z" />
          <path d="M97.365,5.678 L95.506,5.678 L95.216,6.53 L93.667,6.53 L95.728,1.286 L97.14,1.286 L99.245,6.53 L97.654,6.53 L97.365,5.678 Z M96.433,2.922 L95.858,4.547 L97.013,4.547 L96.433,2.922 Z" />
          <polygon points="105.557 1.286 105.557 6.532 104.357 6.532 102.274 3.686 102.274 6.532 100.874 6.532 100.874 1.288 102.139 1.288 104.152 4.039 104.152 1.288" />
          <polygon points="112.378 1.286 112.378 6.532 111.183 6.532 109.1 3.686 109.1 6.532 107.7 6.532 107.7 1.288 108.965 1.288 110.979 4.039 110.979 1.288" />
          <path d="M117.71,5.678 L115.851,5.678 L115.561,6.53 L114.012,6.53 L116.072,1.286 L117.484,1.286 L119.591,6.532 L118,6.532 L117.71,5.678 Z M116.777,2.922 L116.203,4.547 L117.357,4.547 L116.777,2.922 Z" />
          <path d="M125.341,5.037 C125.320186,5.46289554 125.127576,5.86215218 124.807189,6.14352768 C124.486802,6.42490318 124.066018,6.56434989 123.641,6.53 L121.224,6.53 L121.224,1.286 L123.591,1.286 C123.984042,1.24081172 124.378434,1.35864027 124.682274,1.61202868 C124.986113,1.86541708 125.172861,2.23223328 125.199,2.627 C125.192167,3.09485344 124.940533,3.52486968 124.536,3.76 C125.033644,3.98857652 125.349377,4.48943616 125.341,5.037 Z M123.341,2.411 L122.61,2.411 L122.61,3.324 L123.341,3.324 C123.512926,3.33794887 123.678109,3.25411908 123.768354,3.10711872 C123.858598,2.96011836 123.858598,2.77488164 123.768354,2.62788128 C123.678109,2.48088092 123.512926,2.39705113 123.341,2.411 L123.341,2.411 Z M123.912,4.865 C123.91375,4.7311871 123.858495,4.6029473 123.760036,4.51231173 C123.661577,4.42167615 123.529211,4.37720279 123.396,4.39 L122.61,4.39 L122.61,5.343 L123.396,5.343 C123.529576,5.35555829 123.662167,5.31055572 123.760503,5.21928525 C123.858838,5.12801479 123.913583,4.99913972 123.911,4.865 L123.912,4.865 Z" />
          <polygon points="127.228 1.286 128.691 1.286 128.691 6.532 127.228 6.532" />
          <path d="M130.581,4.832 L132.071,4.832 C132.069687,4.99122781 132.136707,5.14337683 132.255074,5.24988767 C132.37344,5.35639852 132.531793,5.40704802 132.69,5.389 C132.99,5.389 133.281,5.228 133.281,4.942 C133.281,4.613 132.873,4.517 132.374,4.397 C131.616,4.208 130.648,3.976 130.648,2.782 C130.648,1.749 131.407,1.158 132.648,1.158 C133.905,1.158 134.626,1.803 134.626,2.869 L133.177,2.869 C133.179029,2.72861335 133.119996,2.59426394 133.015218,2.50080786 C132.91044,2.40735178 132.770243,2.36400005 132.631,2.382 C132.373,2.382 132.131,2.494 132.131,2.739 C132.131,3.039 132.531,3.139 133.02,3.259 C133.792,3.459 134.801,3.716 134.801,4.914 C134.801,6.06 133.921,6.654 132.701,6.654 C131.411,6.658 130.581,5.98 130.581,4.832 Z" />
        </g>
        <g transform="translate(0.000000, 16.000000)">
          <g fill={mono ? "#FFF" : "#000000"}>
            <path d="M38.691,17.178 C37.0591902,18.5748835 35.236929,19.732484 33.279,20.616 C32.2165899,21.0890808 31.0889096,21.399235 29.934,21.536 C28.651,21.68 27.365,21.79 26.078,21.897 C24.210334,21.9926367 22.3813175,22.4651128 20.701,23.286 C19.8699247,23.7064692 19.0801306,24.2039826 18.342,24.772 C16.9404091,25.90729 15.6803705,27.2069461 14.589,28.643 C13.1363333,30.5183333 11.7263333,32.4266667 10.359,34.368 C8.419,37.12 6.518,39.899 4.594,42.661 C5.30066667,43.7096667 6.07966667,44.7523333 6.931,45.789 C7.514,44.984 8.088,44.172 8.645,43.347 C11.217,39.534 13.745,35.69 16.354,31.902 C17.8860304,29.5940588 19.6844038,27.4744754 21.712,25.587 C22.4090106,24.9660371 23.1730605,24.4246953 23.99,23.973 C25.5771049,23.1108351 27.3240238,22.5829818 29.123,22.422 C30.229,22.304 31.343,22.247 32.446,22.105 C33.3393484,22.0068686 34.2243585,21.8437701 35.094,21.617 C36.597696,21.1517576 38.0160751,20.4459451 39.294,19.527 C41.0643825,18.2869056 42.7485837,16.9281184 44.335,15.46 C48.8896667,11.386 53.444,7.31133333 57.998,3.236 C57.318,2.918 56.6233333,2.63166667 55.914,2.377 C52.862,5.01633333 49.8103333,7.65533333 46.759,10.294 C44.091,12.604 41.409,14.912 38.691,17.178 Z" />
            <path d="M36.072,38.071 C37.5227277,35.411316 39.1389026,32.8452751 40.911,30.388 C41.7314399,29.242956 42.6881343,28.2019757 43.76,27.288 C44.9286633,26.3032651 46.3159321,25.6123737 47.806,25.273 C48.778,25.059 49.768,24.916 50.754,24.773 C52.0743377,24.6406278 53.3608369,24.2756683 54.554,23.695 C55.5016084,23.174541 56.3927052,22.5572412 57.213,21.853 C58.6952058,20.562785 60.0902635,19.1757448 61.389,17.701 C63.1723333,15.7423333 64.9543333,13.7823333 66.735,11.821 C66.3653944,11.0372307 65.9475944,10.2771085 65.484,9.545 C63.012,12.1523333 60.5403333,14.7593333 58.069,17.366 C56.7496351,18.8002725 55.3350957,20.1439846 53.835,21.388 C52.9494972,22.1162546 51.9871282,22.7456506 50.965,23.265 C49.7224412,23.8157531 48.398412,24.160271 47.045,24.285 C45.897,24.446 44.745,24.615 43.613,24.856 C42.4450513,25.1268844 41.3437513,25.6305982 40.375,26.337 C39.0797789,27.2877218 37.9375747,28.4309376 36.988,29.727 C35.1492022,32.1962236 33.4659451,34.7775517 31.948,37.456 C29.661,41.332 27.421,45.237 25.093,49.089 C23.4624969,51.7537719 21.6788362,54.3217492 19.751,56.78 C20.9063333,57.476 22.0963333,58.1286667 23.321,58.738 C24.707,56.9133333 26.034,55.0466667 27.302,53.138 C29.037,50.514 30.621,47.8 32.158,45.057 C33.466,42.732 34.754,40.391 36.072,38.071 Z" />
            <path d="M51.798,32.11 C52.6117213,30.8024882 53.5945512,29.6081632 54.721,28.558 C55.6364723,27.7089643 56.7346968,27.0815051 57.931,26.724 C58.779,26.486 59.647,26.31 60.514,26.153 C61.782437,25.9928479 63.0083089,25.5905609 64.125,24.968 C64.9958933,24.4147062 65.8060363,23.7711504 66.542,23.048 C67.4895181,22.119132 68.386476,21.1400559 69.229,20.115 C69.029,18.915 68.777,17.741 68.475,16.615 L66.984,18.383 C65.7648703,19.8603382 64.4578354,21.2628794 63.07,22.583 C61.4250885,24.2284211 59.2869818,25.2904504 56.982,25.607 C55.9447164,25.7457246 54.9177902,25.953181 53.908,26.228 C52.8169671,26.5365736 51.8034816,27.0722828 50.934,27.8 C49.8244328,28.7234003 48.8528944,29.8010165 48.049,31 C46.8237968,32.7412877 45.7070155,34.5563913 44.705,36.435 C42.57,40.417 40.466,44.415 38.34,48.402 C35.9043564,52.9477641 33.1539889,57.3177442 30.109,61.48 C31.5722622,61.9413667 33.0590291,62.3245747 34.563,62.628 C34.663,62.488 34.763,62.35 34.863,62.209 C37.1677018,58.9453138 39.2715927,55.5443574 41.163,52.025 C43.301,47.972 45.354,43.874 47.454,39.801 C48.7635567,37.1615668 50.2136365,34.5942179 51.798,32.11 L51.798,32.11 Z" />
            <path d="M67.2,26.937 C66.622,27.049 66.045,27.168 65.473,27.306 C63.9049488,27.684488 62.4805854,28.5102714 61.373,29.683 C60.4449244,30.6759651 59.6296255,31.7686198 58.942,32.941 C57.0463603,36.1936744 55.3194087,39.5417709 53.768,42.972 C52.124,46.413 50.503,49.865 48.812,53.283 C47.0596834,56.7695599 45.1184657,60.1579279 42.997,63.433 C47.4502574,63.3770457 51.8596432,62.5449138 56.027,60.974 C64.961,57.624 70.427,40.718 69.832,26.021 C69.0126498,26.472686 68.1227418,26.7823956 67.2,26.937 Z" />
            <path d="M44.791,20.288 C42.8543294,21.766108 40.5458911,22.6785451 38.122,22.924 C36.787,23.038 35.455,23.215 34.129,23.413 C32.7349954,23.6394277 31.4000361,24.1411847 30.202,24.889 C28.8990241,25.713778 27.7329541,26.7371259 26.746,27.922 C25.3609642,29.5171404 24.0910959,31.2087387 22.946,32.984 C20.486,36.793 18.063,40.626 15.62,44.447 C14.2913333,46.527 12.8826667,48.5443333 11.394,50.499 C12.3153333,51.351 13.282,52.1793333 14.294,52.984 C16.5169551,50.0791764 18.5819422,47.0568044 20.48,43.93 C22.024,41.3826667 23.5803333,38.8423333 25.149,36.309 C26.6469053,33.8079082 28.3001483,31.4031911 30.099,29.109 C31.0998524,27.8108101 32.278019,26.659573 33.599,25.689 C34.7704369,24.8756322 36.0868175,24.2941572 37.477,23.976 C38.8568634,23.7060132 40.2506863,23.513048 41.652,23.398 C42.580529,23.3058361 43.4958654,23.1102915 44.381,22.815 C45.7595927,22.2902782 47.0508699,21.5600154 48.211,20.649 C49.6026899,19.583609 50.9210093,18.4256528 52.157,17.183 C55.773,13.617 59.388,10.0503333 63.002,6.483 C62.5585414,6.06027147 62.0864182,5.66867317 61.589,5.311 C61.489,5.236 61.375,5.168 61.269,5.095 C57.3236667,8.84433333 53.3793333,12.5933333 49.436,16.342 C47.9783164,17.7604587 46.426448,19.0787951 44.791,20.288 Z" />
            <path d="M3.934,33.29 C5.319,31.381 6.734,29.498 8.27,27.705 C9.43780573,26.2890505 10.7569835,25.0050821 12.204,23.876 C12.9568316,23.3282674 13.76052,22.8540912 14.604,22.46 C16.411938,21.6435296 18.3607231,21.1844326 20.343,21.108 C21.712,21.008 23.082,20.908 24.443,20.763 C26.6390614,20.4591013 28.7400858,19.6707475 30.594,18.455 C32.785046,17.0488692 34.8754425,15.4917644 36.85,13.795 L52.091,1.324 C30.447,-2.954 0.001,16.993 0.001,30.185 C0.0567213954,32.4474231 0.538467602,34.6790615 1.421,36.763 C2.25766667,35.605 3.09533333,34.4473333 3.934,33.29 Z" />
          </g>
          <g transform="translate(1.000000, 1.000000)">
            <path
              d="M21.943,31.984 C23.087743,30.2084929 24.3576297,28.5168702 25.743,26.922 C26.7299541,25.7371259 27.8960241,24.713778 29.199,23.889 C30.3970361,23.1411847 31.7319954,22.6394277 33.126,22.413 C34.452,22.213 35.784,22.038 37.119,21.924 C39.5431521,21.6783665 41.8518653,20.7659575 43.789,19.288 C45.4204255,18.0788168 46.9685928,16.7611707 48.423,15.344 C52.3683333,11.596 56.3126667,7.847 60.256,4.097 C59.2242339,3.38787486 58.1355132,2.76541424 57.001,2.236 C52.447,6.31066667 47.8926667,10.3853333 43.338,14.46 C41.7515837,15.9281184 40.0673825,17.2869056 38.297,18.527 C37.0190751,19.4459451 35.600696,20.1517576 34.097,20.617 C33.2273585,20.8437701 32.3423484,21.0068686 31.449,21.105 C30.349,21.247 29.232,21.305 28.126,21.422 C26.3270238,21.5829818 24.5801049,22.1108351 22.993,22.973 C22.1760605,23.4246953 21.4120106,23.9660371 20.715,24.587 C18.6874038,26.4744754 16.8890304,28.5940588 15.357,30.902 C12.748,34.69 10.22,38.534 7.648,42.347 C7.093,43.17 6.511,43.971 5.931,44.773 C7.30432052,46.4383805 8.7890642,48.008654 10.375,49.473 C11.857,47.518 13.289,45.523 14.616,43.446 C17.059,39.626 19.482,35.793 21.943,31.984 Z"
              fill={mono ? "#000" : "#1DCAD3"}
            />
            <path
              d="M30.952,36.458 C32.4697103,33.7794089 34.1529768,31.1980664 35.992,28.729 C36.9415747,27.4329376 38.0837789,26.2897218 39.379,25.339 C40.3477513,24.6325982 41.4490513,24.1288844 42.617,23.858 C43.75,23.617 44.901,23.448 46.049,23.287 C47.402412,23.162271 48.7264412,22.8177531 49.969,22.267 C50.9911282,21.7476506 51.9534972,21.1182546 52.839,20.39 C54.3390957,19.1459846 55.7536351,17.8022725 57.073,16.368 C59.5396667,13.768 62.0063333,11.1653333 64.473,8.56 C63.7724366,7.43839523 62.9368561,6.40701755 61.985,5.489 C58.371,9.055 54.7573333,12.6216667 51.144,16.189 C49.9077527,17.4313797 48.5894522,18.5893192 47.198,19.655 C46.0378699,20.5660154 44.7465927,21.2962782 43.368,21.821 C42.4831793,22.1161867 41.5681859,22.3117297 40.64,22.404 C39.2383553,22.5190481 37.8441996,22.7120132 36.464,22.982 C35.0738175,23.3001572 33.7574369,23.8816322 32.586,24.695 C31.265019,25.665573 30.0868524,26.8168101 29.086,28.115 C27.2871483,30.4091911 25.6339053,32.8139082 24.136,35.315 C22.5633333,37.8483333 21.007,40.3886667 19.467,42.936 C17.566694,46.0572853 15.499702,49.0739854 13.275,51.973 C15.0160976,53.35998 16.8452654,54.6326479 18.751,55.783 C20.677826,53.326193 22.4608088,50.7598999 24.091,48.097 C26.425,44.239 28.665,40.332 30.952,36.458 Z"
              fill={mono ? "#000" : "#FCD199"}
            />
            <path
              d="M65.542,22.048 C64.8060363,22.7711504 63.9958933,23.4147062 63.125,23.968 C62.0083089,24.5905609 60.782437,24.9928479 59.514,25.153 C58.647,25.31 57.779,25.486 56.931,25.724 C55.7348661,26.0819002 54.6367267,26.7093107 53.721,27.558 C52.5945512,28.6081632 51.6117213,29.8024882 50.798,31.11 C49.2136052,33.594543 47.7635251,36.1622264 46.454,38.802 C44.354,42.875 42.301,46.973 40.163,51.026 C38.2713658,54.5452264 36.1674833,57.9461693 33.863,61.21 C33.763,61.347 33.663,61.482 33.571,61.619 C36.3434574,62.1865006 39.168186,62.4590181 41.998,62.432 C44.1195061,59.1574817 46.0604025,55.7694258 47.812,52.283 C49.503,48.865 51.124,45.413 52.768,41.972 C54.3194087,38.5417709 56.0463603,35.1936744 57.942,31.941 C58.6296444,30.768375 59.4453036,29.6756869 60.374,28.683 C61.4812965,27.5099066 62.9057757,26.684056 64.474,26.306 C65.046,26.168 65.623,26.049 66.201,25.937 C67.1235118,25.7806584 68.0128031,25.4688992 68.831,25.015 C68.7521944,23.0398544 68.5491261,21.0716287 68.223,19.122 C67.3827713,20.1449831 66.487796,21.1217448 65.542,22.048 Z"
              fill={mono ? "#000" : "#FF4438"}
            />
            <path
              d="M43.705,35.432 C44.7073856,33.5536036 45.8241532,31.7385224 47.049,29.997 C47.8528944,28.7980165 48.8244328,27.7204003 49.934,26.797 C50.8034816,26.0692828 51.8169671,25.5335736 52.908,25.225 C53.9177902,24.950181 54.9447164,24.7427246 55.982,24.604 C58.2869818,24.2874504 60.4250885,23.2254211 62.07,21.58 C63.4578354,20.2598794 64.7648703,18.8573382 65.984,17.38 L67.464,15.625 C67.0341059,13.9761089 66.4557431,12.3695454 65.736,10.825 C63.9553333,12.783 62.1743333,14.7416667 60.393,16.701 C59.0942635,18.1757448 57.6992058,19.562785 56.217,20.853 C55.3968904,21.557481 54.5057678,22.1747987 53.558,22.695 C52.3648293,23.2756486 51.0783337,23.6406071 49.758,23.773 C48.771,23.915 47.781,24.058 46.809,24.273 C45.3189321,24.6123737 43.9316633,25.3032651 42.763,26.288 C41.6911343,27.2019757 40.7344399,28.242956 39.914,29.388 C38.1419026,31.8452751 36.5257277,34.411316 35.075,37.071 C33.757,39.391 32.469,41.728 31.165,44.056 C29.628,46.799 28.044,49.513 26.309,52.137 C25.046,54.049 23.709,55.905 22.319,57.73 C24.5055695,58.8190657 26.7737875,59.7358484 29.103,60.472 C32.150484,56.3127518 34.9038457,51.9457999 37.343,47.403 C39.466,43.416 41.57,39.418 43.705,35.432 Z"
              fill={mono ? "#000" : "#FF9E18"}
            />
            <path
              d="M13.591,27.643 C14.6823705,26.2069461 15.9424091,24.90729 17.344,23.772 C18.082323,23.2037502 18.8724713,22.7062246 19.704,22.286 C21.384231,21.4648787 23.2132962,20.99239 25.081,20.897 C26.367,20.79 27.653,20.68 28.936,20.536 C30.0909096,20.399235 31.2185899,20.0890808 32.281,19.616 C34.2391121,18.7322562 36.0616726,17.5746795 37.694,16.178 C40.408,13.912 43.087,11.604 45.763,9.294 C48.8156667,6.65666667 51.8673333,4.01766667 54.918,1.377 C53.6696632,0.9311591 52.3897697,0.579180034 51.089,0.324 L35.856,12.795 C33.8814425,14.4917644 31.791046,16.0488692 29.6,17.455 C27.7460858,18.6707475 25.6450614,19.4591013 23.449,19.763 C22.085,19.912 20.715,20.013 19.349,20.108 C17.3667231,20.1844326 15.417938,20.6435296 13.61,21.46 C12.7663757,21.8538174 11.9626617,22.3280087 11.21,22.876 C9.76243866,24.004802 8.44290028,25.288795 7.275,26.705 C5.742,28.498 4.324,30.381 2.939,32.29 C2.10233333,33.444 1.266,34.599 0.43,35.755 C1.27476724,37.8257737 2.33670246,39.8011475 3.598,41.648 C5.521,38.888 7.429,36.117 9.367,33.368 C10.7303333,31.4286667 12.1383333,29.5203333 13.591,27.643 Z"
              fill={mono ? "#000" : "#A2D45E"}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default Logo
