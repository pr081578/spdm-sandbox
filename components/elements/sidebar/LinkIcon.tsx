import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface LinkIconProps {
  route: Url;
  icon: React.ElementType;
  icon_size: Number;
  css?: String;
}

const LinkIcon = ({ route, icon: Icon, icon_size }: LinkIconProps) => {
  return (
    <Link href={route}>
      <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
        <Icon size={icon_size} />
      </div>
    </Link>
  );
};

export default LinkIcon;
