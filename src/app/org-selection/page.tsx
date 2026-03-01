import { OrganizationList } from "@clerk/nextjs";

export default function OrgSelectionPage() {
  return (
    <div>
      <OrganizationList
        hidePersonal={true}
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}
