import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

const sections = [
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        수강편람
      </Box>
    ),
    url: "/courseCatalog",
    everybody: true,
    user: true,
    admin: true,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        과목 조회 및 변경
      </Box>
    ),
    url: "/changeCatalog",
    everybody: false,
    user: false,
    admin: true,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        과목 생성
      </Box>
    ),
    url: "/addNewCourse",
    everybody: false,
    user: false,
    admin: true,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        수업 개설
      </Box>
    ),
    url: "/addNewClass",
    everybody: false,
    user: false,
    admin: true,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        학생 조회 및 변경
      </Box>
    ),
    url: "/changeStudentInfo",
    everybody: false,
    user: false,
    admin: true,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        통계
      </Box>
    ),
    url: "/stats",
    everybody: false,
    user: false,
    admin: true,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        희망수업
      </Box>
    ),
    url: "/desiredCourse",
    everybody: false,
    user: true,
    admin: false,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        신청내역
      </Box>
    ),
    url: "/myCurrentList",
    everybody: false,
    user: true,
    admin: false,
  },
  {
    title: (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        내 시간표
      </Box>
    ),
    url: "/mySchedule",
    everybody: false,
    user: true,
    admin: false,
  },
]

export default function Header() {
  const { data: session, status } = useSession()
  useEffect(() => {}, [status])

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
          style={{ fontWeight: 600 }}
        >
          <Link href="/" underline="none" color="inherit">
            Project #1 수강신청
          </Link>
        </Typography>

        {status === "authenticated" ? (
          <>
            <span>
              {session.user.image === "admin" ? "관리자" : "일반사용자"}
            </span>
            <span style={{ marginLeft: 15 }}>성명: {session.user.name}</span>
            <span style={{ marginLeft: 15 }}>ID: {session.user.email}</span>
            <a
              onClick={() => signOut({ callbackUrl: "/", redirect: true })}
              style={{ marginRight: 60, cursor: "pointer", marginLeft: 30 }}
            >
              로그아웃
            </a>
          </>
        ) : (
          <a
            onClick={() => signIn({ callbackUrl: "/", redirect: false })}
            style={{ marginRight: 60, cursor: "pointer" }}
          >
            로그인
          </a>
        )}
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "flex-start" }}
      >
        {status === "authenticated" ? (
          session.user.image === "admin" ? (
            sections.map((section) => {
              if (section.admin == true) {
                return (
                  <Link
                    underline="hover"
                    color="inherit"
                    noWrap
                    key={section.url}
                    variant="body2"
                    href={section.url}
                    sx={{ p: 1, mr: 5 }}
                  >
                    {section.title}
                  </Link>
                )
              }
            })
          ) : session.user.image === "user" ? (
            sections.map((section) => {
              if (section.user == true) {
                return (
                  <Link
                    underline="hover"
                    color="inherit"
                    noWrap
                    key={section.url}
                    variant="body2"
                    href={section.url}
                    sx={{ p: 1, mr: 5 }}
                  >
                    {section.title}
                  </Link>
                )
              }
            })
          ) : (
            <></>
          )
        ) : (
          sections.map((section) => {
            if (section.everybody == true) {
              return (
                <Link
                  underline="hover"
                  color="inherit"
                  noWrap
                  key={section.url}
                  variant="body2"
                  href={section.url}
                  sx={{ p: 1, mr: 5 }}
                >
                  {section.title}
                </Link>
              )
            }
          })
        )}
      </Toolbar>
    </>
  )
}
