import "../assets/styles/index.module.scss";
import "../assets/styles/index.css";
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return []
}
 
export default function Page() {
  return <ClientOnly />
}