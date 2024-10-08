// "use client";

// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
// import { useGetAllUsersQuery } from "@/redux/features/user/userApi";

// import { Search } from "lucide-react";
// import { useNavigate, useSearchParams } from "react-router-dom";


// export default function GlobalSearch({ placeholder }: { placeholder: string }) {
//     const navigate=useNavigate();
//   const searchParams = useSearchParams();
//   const pathname = window.location();

//   const { data } = useGetAllUsersQuery({});

//   const getIdFromPathname = (pathname: string) => {
//     const match = pathname.match(
//       /\/blogs\/(?:details|bookmarks\/details)\/(.+)/
//     );
//     return match ? match[1] : null;
//   };



//   function handleSearch(term: string) {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//       params.set("q", term);
//     } else {
//       params.delete("q");
//     }
//     navigate(`${pathname}?${params.toString()}`);
//   }

//   return (
//     <div className="max-w-full w-full">
//       <div className="relative">
//         <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//         <Input
//           type="search"
//           onChange={(e) => {
//             if (!disableSearch) {
//               handleSearch(e.target.value);
//             }
//           }}
//           placeholder="Search blogs....."
//           className={cn(
//             "w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 rounded-xl"
//           )}
//           defaultValue={searchParams.get("query")?.toString()}
//           disabled={disableSearch}
//         />
//       </div>
//     </div>
//   );
// }
