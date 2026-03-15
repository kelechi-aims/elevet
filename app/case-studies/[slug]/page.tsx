import CaseStudyDetailContent from "@/app/_components/CaseStudyDetailContent";
import { caseStudies } from "@/app/_lib/data";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { slug: string } }) {
  const p = await params;
  const study = caseStudies.find((item) => item.slug === p.slug);

  if (!study || !study.imageSrc1) return notFound();

  return <CaseStudyDetailContent study={study} />;
}
