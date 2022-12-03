import { FC } from "react";

interface Props {
  className?: string;
}
const Wallet: FC<Props> = ({ className = "" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M17.2 5.19998H2.20002V4.59998L15.4 3.54398V4.59998H17.2V2.79998C17.2 1.47998 16.1308 0.553584 14.8252 0.739584L2.77602 2.46038C1.46922 2.64758 0.400024 3.87998 0.400024 5.19998V17.2C0.400024 17.8365 0.652881 18.447 1.10297 18.897C1.55306 19.3471 2.1635 19.6 2.80002 19.6H17.2C17.8365 19.6 18.447 19.3471 18.8971 18.897C19.3472 18.447 19.6 17.8365 19.6 17.2V7.59998C19.6 6.96346 19.3472 6.35301 18.8971 5.90293C18.447 5.45284 17.8365 5.19998 17.2 5.19998ZM15.4 13.6072C15.1636 13.6071 14.9294 13.5605 14.711 13.4699C14.4926 13.3793 14.2941 13.2466 14.127 13.0794C13.9598 12.9121 13.8273 12.7136 13.7369 12.4951C13.6464 12.2766 13.5999 12.0424 13.6 11.806C13.6001 11.5695 13.6468 11.3354 13.7373 11.117C13.8279 10.8985 13.9606 10.7001 14.1278 10.5329C14.2951 10.3658 14.4936 10.2332 14.7121 10.1428C14.9306 10.0524 15.1648 10.0059 15.4012 10.006C15.8788 10.0061 16.3367 10.196 16.6743 10.5338C17.0118 10.8716 17.2014 11.3296 17.2012 11.8072C17.2011 12.2847 17.0112 12.7427 16.6734 13.0802C16.3356 13.4178 15.8776 13.6073 15.4 13.6072Z"
      fill="currentColor"
    />
  </svg>
);
export default Wallet;
