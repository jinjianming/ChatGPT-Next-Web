import { Mask } from "@/app/store/mask"; // 导入 Mask 类型

export default function SessionItem(props: {
  onClick?: () => void;
  onDelete?: () => void;
  title: string;
  count: number;
  time: string;
  selected: boolean;
  id: string;
  index: number;
  narrow?: boolean;
  mask: Mask;
  isMobileScreen: boolean;
}) {
  // 如果不需要渲染任何内容，可以直接返回 null
  return null;
}
