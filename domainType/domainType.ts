export function domainType(domains: string[]): string[] {
  let domainTypes: string[] = [];

  domains.forEach((domain) => {
    domain.endsWith(".org")
      ? domainTypes.push("organization")
      : domain.endsWith(".com")
      ? domainTypes.push("commercial")
      : domain.endsWith(".net")
      ? domainTypes.push("network")
      : domain.endsWith(".info")
      ? domainTypes.push("information")
      : domainTypes;
  });
  return domainTypes;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
