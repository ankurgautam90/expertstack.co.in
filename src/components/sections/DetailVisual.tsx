import { PatternVisual } from "@/components/visuals/PatternVisual";
import { AppFlowVisual } from "@/components/visuals/AppFlowVisual";
import { CloudVisual } from "@/components/visuals/CloudVisual";
import { DataCenterVisual } from "@/components/visuals/DataCenterVisual";
import { IntegrationStackVisual } from "@/components/visuals/IntegrationStackVisual";
import { NetworkSwitchVisual } from "@/components/visuals/NetworkSwitchVisual";
import { RackServerVisual } from "@/components/visuals/RackServerVisual";
import { SecurityVisual } from "@/components/visuals/SecurityVisual";
import { ServerRackVisual } from "@/components/visuals/ServerRackVisual";
import type { VisualKey } from "@/lib/data/catalog";
import type { IconName } from "@/components/icons/Icon";

/** Resolves a catalogue visual key to the right piece of artwork. */
export function DetailVisual({
  visual,
  icon,
  className,
}: {
  visual: VisualKey;
  icon?: IconName;
  className?: string;
}) {
  switch (visual) {
    case "integration":
      return <IntegrationStackVisual className={className} />;
    case "appflow":
      return <AppFlowVisual className={className} />;
    case "cloud":
      return <CloudVisual className={className} />;
    case "rack":
      return <ServerRackVisual className={className} />;
    case "server":
      return <RackServerVisual className={className} />;
    case "switch":
      return <NetworkSwitchVisual className={className} />;
    case "security":
      return <SecurityVisual className={className} />;
    case "datacenter":
      return <DataCenterVisual className={className} />;
    default:
      return <PatternVisual variant={visual} icon={icon} className={className} />;
  }
}
