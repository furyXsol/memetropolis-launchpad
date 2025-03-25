"use client";

import { useParams } from "next/navigation";
import ProfilePageContainer from './_containers/page-container'

export default function Profile() {
  const params = useParams()
  const address = params.address as string

  return (
    <ProfilePageContainer
      address={address}
    />
  )
}
