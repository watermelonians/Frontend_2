import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const response = await fetch(
    process.env.BACKEND_HOST + "/api/problem/getMyProblems",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    },
  );
  if (response.status == 401) {
    return NextResponse.redirect("/login");
  }
  if (response.status == 200) {
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  }
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
