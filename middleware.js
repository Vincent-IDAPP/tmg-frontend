import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {

  const cookies = request.cookies;
  // Exemple : récupérer les cookies que tu sais possibles
  
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.redirect(new URL("/connexion", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/portail", "/portail/sous-matieres", "/portail/competences", "/pupils"]
};
