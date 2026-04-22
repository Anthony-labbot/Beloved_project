import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { XendColors } from '@/constants/xend-theme';

export function TrustFooter() {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <MaterialCommunityIcons name="shield-check" size={16} color={XendColors.greenShield} />
        <Text style={styles.insureText}>Deposits insured by | </Text>
        <View style={styles.tidalBadge}>
          <Text style={styles.tidalWave}>~~~</Text>
          <Text style={styles.tidalText}>tidal</Text>
        </View>
      </View>
      <Text style={styles.backedLabel}>Backed By:</Text>
      <View style={styles.logosRow}>
        <Text style={styles.logoMuted}>Google FOR STARTUPS</Text>
        <Text style={[styles.logoMuted, { marginLeft: 16 }]}>◆ BINANCE</Text>
      </View>
      <View style={styles.dotGrid} pointerEvents="none">
        {Array.from({ length: 6 }).map((_, i) => (
          <View key={i} style={styles.dotRow}>
            {Array.from({ length: 14 }).map((__, j) => (
              <View key={j} style={styles.dot} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 8,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  insureText: {
    color: XendColors.textSecondary,
    fontSize: 12,
    marginLeft: 4,
  },
  tidalBadge: {
    backgroundColor: '#1a2a5c',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tidalWave: { color: '#5B8DEF', fontSize: 10 },
  tidalText: { color: XendColors.white, fontWeight: '700', fontSize: 12 },
  backedLabel: { color: XendColors.textSecondary, fontSize: 11 },
  logosRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  logoMuted: { color: '#5C5C5C', fontSize: 10, fontWeight: '600', letterSpacing: 0.5 },
  dotGrid: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.25,
    alignItems: 'center',
  },
  dotRow: { flexDirection: 'row', gap: 6, marginVertical: 2 },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: XendColors.primaryBlue,
  },
});
