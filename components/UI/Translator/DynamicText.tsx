// components/UI/Translator/DynamicText.tsx
export function DynamicText({
  children,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return <Tag translate="yes" className="translate-yes">{children}</Tag>;
}