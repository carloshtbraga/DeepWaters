
import '../styles/DeepFlying.css'

export default function DeepFlying({lado, gif}) {
  return (
    <div className="fish-containerd">
    <img className={`fishd ${lado}`} src={gif} alt="fish" />
  </div>
  )
}
