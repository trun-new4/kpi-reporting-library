import Image from "next/image";
interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
  href?: string;
}
export default function CardItem({ title, subtitle, image, href, children }: Props) {
  return (
    <a href={href}>
      <div className="card-item">
        <div className="card-item__content">
          {!!image &&
            <div className="card-item__visual">
              <Image
                alt={title}
                src={image}
                width={500}
                height={500}
                style={{ width: '100%', height: '100%' }} />
            </div>
          }
          <div className="card-item__detail">
            <h3>{title}</h3>
            {!!subtitle &&
              <p>{subtitle}</p>
            }
            {!!children && <div> {children} </div>}
          </div>
        </div>
      </div>
    </a>

  );
}
