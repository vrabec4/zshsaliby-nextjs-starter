import { sanityClient } from "@/lib/sanity/client";

const latestAnnouncementsQuery = `*[_type == "announcement"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  publishedAt,
  excerpt
}`;

export type Announcement = {
  _id: string;
  title: string;
  publishedAt: string;
  excerpt?: string;
};

export async function getLatestAnnouncements(): Promise<Announcement[]> {
  if (!sanityClient) {
    return [];
  }

  return sanityClient.fetch<Announcement[]>(latestAnnouncementsQuery);
}
