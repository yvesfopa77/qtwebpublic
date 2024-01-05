import React from "react"

export default () => {
  return (
    <div className="overflow-hidden">
      <div className="app-images flex overflow-auto items-center lg:justify-between">
        <img
          src={require("../assets/images/technos/tensorflow.svg")}
          alt="Tensorflow"
          className="h-12 mr-8"
        />
        <img
          src={require("../assets/images/technos/react.svg")}
          alt="React"
          className="h-12 mr-8"
        />
        <img
          src={require("../assets/images/technos/kubernetes.svg")}
          alt="kubernetes"
          className="h-12 w-12 mr-8"
        />
        <img
          src={require("../assets/images/technos/docker.png")}
          alt="Docker"
          className="h-12 mr-8"
        />
        <img
          src={require("../assets/images/technos/jenkins.svg")}
          alt="Jenkins"
          className="h-12 mr-8"
        />
        <img
          src={require("../assets/images/technos/android.svg")}
          alt="Android"
          className="mr-8"
          width="120"
        />
        <img
          src={require("../assets/images/technos/apple-ios.svg")}
          alt="iOS"
          className="h-8 mr-8"
        />
        <img
          src={require("../assets/images/technos/c.svg")}
          alt="C"
          className="h-12 w-12 mr-8"
        />
        <img
          src={require("../assets/images/technos/java.svg")}
          alt="Java"
          className="h-12 mr-8"
        />
        <img
          src={require("../assets/images/technos/nodejs.svg")}
          alt="Nodejs"
          className="mr-8"
          width="90"
        />
        <img
          src={require("../assets/images/technos/python.svg")}
          alt="python"
          className="mr-8"
          width="100"
        />
        <img
          src={require("../assets/images/technos/blockchain.svg")}
          alt="blockchain"
          className="mr-8"
          width="100"
        />
        <img
          src={require("../assets/images/technos/rsa.jpg")}
          alt="React"
          className="h-12 mr-8"
        />
      </div>
    </div>
  )
}
