import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/','product-detail/(.*)']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};