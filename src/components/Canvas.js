
export default function Canvas() {
  return (
    <div>


      <canvas
        className="bg-cover absolute bottom-0 top-0 md:top-[-25vh] \ left-0 w-[100vw] h-[100vh] transform origin-[0.08% 100%] skew-y-[-16deg] scale-[120%] border-none z-[-1]"
        style={{
          backgroundColor: "hsla(0,100%,50%,1)",
          backgroundImage:
            "radial-gradient(at 40% 20%,hsla(28, 100%, 74%, 1) 0px,transparent 50%),radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)"
        }}
      >
      </canvas>
      
    </div>
  );
}
