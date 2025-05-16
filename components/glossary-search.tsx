"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
}

interface GlossarySearchProps {
  items: GlossaryItem[];
  onSearch: (filtered: GlossaryItem[]) => void;
}

export default function GlossarySearch({ items, onSearch }: GlossarySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const filtered = items.filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filtered);
  }, [searchTerm, items, onSearch]);
  
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input 
        className="pl-10" 
        placeholder="Найти термин..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p className="mt-2 text-sm text-muted-foreground">
        В глоссарии содержится {items.length} терминов и определений.
      </p>
    </div>
  );
}