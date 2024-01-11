export type TextBlockProps = {
  Title: string;

  headerClassName?: string;
  contentClassName?: string;
} & React.HTMLProps<HTMLDivElement>;

const TextBlock = ({
  Title,
  className,
  headerClassName = "text-xxl",
  contentClassName = "text-md",
  children,
  ...rest
}: TextBlockProps) => {
  return (
    <div className={className}>
      <h1 className={`font-extrabold ${headerClassName}`}>{Title}</h1>
      <p className={` font-normal ${contentClassName}`}>{children}</p>
    </div>
  );
};

export default TextBlock;
