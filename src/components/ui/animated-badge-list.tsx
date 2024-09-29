import { motion } from "framer-motion";
import { Badge } from "./badge";

export type AnimatedBadgeListProps = {
  items: string[];
};

export const AnimatedBadgeList = ({ items }: AnimatedBadgeListProps) => {
  return (
    <div className="my-4">
      <div className="flex flex-wrap gap-2">
        {items.map((item: string, index: number) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Badge
              variant="secondary"
              className="text-xs"
              key={item}
              title={item}
            >
              {item}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
