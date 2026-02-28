import createImageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "@/lib/sanity/client";

const imageBuilder = sanityClient ? createImageUrlBuilder(sanityClient) : null;
type SanityImageSource = Parameters<NonNullable<typeof imageBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  if (!imageBuilder) {
    throw new Error(
      "Sanity client is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID to use image URLs.",
    );
  }
  return imageBuilder.image(source);
}
