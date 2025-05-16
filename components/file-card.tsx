"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, File as FilePdf, FileText, Eye } from "lucide-react";

interface FileCardProps {
  number: number;
  title: string;
  description: string;
  fileType: "pdf" | "docx";
  fileUrl: string;
}

export default function FileCard({ number, title, description, fileType, fileUrl }: FileCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  
  const FileIcon = fileType === "pdf" ? FilePdf : FileText;
  const fileTypeName = fileType === "pdf" ? "PDF" : "DOCX";
  
  return (
    <Card 
      className="transition-all duration-300 hover:shadow-md hover:border-primary/50 flex flex-col justify-between"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2 text-sm">
            №{number}
          </Badge>
          <Badge 
            variant={fileType === "pdf" ? "destructive" : "secondary"}
            className="mb-2 text-sm"
          >
            {fileTypeName}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center py-6">
        <div className={`relative flex items-center justify-center w-16 h-16 transition-all duration-300 ${isHovering ? "scale-110" : "scale-100"}`}>
          <FileIcon className={`w-full h-full ${fileType === "pdf" ? "text-destructive/70" : "text-primary/70"}`} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            <Eye className="mr-2 h-4 w-4" />
            Просмотр
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={fileUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Скачать
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}